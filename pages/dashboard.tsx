/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Participation from '../components/participation';
import Circulation from '../components/circulation';
import axios, { AxiosResponse } from 'axios';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

interface Menu {
    pipeline: number | null;
    // 선택된 파이프라인
    menu: string | null;
    // 선택된 메뉴
}

interface ParticipationType {
    name: string;
    // 기업 이름
    companyLogo: string;
    // 기업 로고
    description: string;
    // 기업 설명
}

interface CirculationType {
    name: string;
    // 유통 단계 이름
    companyTitle: string;
    // 회사 이름
    companyLogo: string;
    // 회사 로고
    role: string;
    // 역할
    description: string;
    // 설명
}

interface Overview {
    category: string;
    // 제품 카테고리
    participations: ParticipationType[];
    // 참여 기업
    company: string;
    // 기업
    description: string;
    // 제품 설명
}

interface Pipeline {
    name: string;
    // 파이프라인 이름
    overview: Overview;
    // 파이프라인 개요
    selected: boolean;
    // 사이드바 드롭다운 활성화 여부
    logo: string;
    // 파이프라인 로고 url
    circulations: CirculationType[][];
    // 유통 구조(CirculationType Array)
}

const menuList = ['제품 개요', '유통 과정', '투명화', '설정'];

const menuDescription = [
    '제품의 전체적인 개요입니다',
    '제품의 유통구조를 한 눈에 확인할 수 있습니다.',
    '제품에 발급된 투명화 코드를 확인할 수 있습니다',
    '설정 설명.',
];

const getPipelines = () => {
    return axios.get('http://localhost:3000/api/pipelines').then((response) => {
        console.log(response.data);
        return response.data;
    });
};

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['pipelines'], getPipelines);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const DashBoard: NextPage = () => {
    const { data } = useQuery(['pipelines'], getPipelines);
    const [pipelines, setPipelines] = useState<Pipeline[]>(data);
    const [searchInput, setSearchInput] = useState<string>('');

    const [selectedMenu, setSelectedMenu] = useState<Menu>({
        pipeline: null,
        menu: null,
    });

    const selectPipeline = (index: number) => {
        const newState = pipelines.map((item: Pipeline, count: number) => {
            if (count === index) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });

        setPipelines(newState);
    };

    const setMenu = (index: number, menu: string) => {
        const newState = selectedMenu;
        newState.pipeline = index;
        newState.menu = menu;
        setSelectedMenu({ ...newState });
    };

    return (
        <DashBoardContainer>
            <Sidebar>
                <SidebarContent>
                    <Logo>
                        <img src="/images/logo.svg" alt="로고" />
                    </Logo>
                    {pipelines.map((item: Pipeline, index: number) => (
                        <Pipeline key={index}>
                            {item.selected ? (
                                <>
                                    <PipelineTitle
                                        onClick={() => selectPipeline(index)}
                                    >
                                        <ProductTitle>
                                            <ProductImageSmall
                                                src={item.logo}
                                            />
                                            파이프라인
                                        </ProductTitle>
                                        <div className="material-symbols-rounded">
                                            Expand_less
                                        </div>
                                    </PipelineTitle>
                                    {menuList.map((menu, menuIndex) =>
                                        selectedMenu.pipeline === index &&
                                        selectedMenu.menu === menu ? (
                                            <PipelineMenu
                                                key={menuIndex}
                                                onClick={() =>
                                                    setMenu(index, menu)
                                                }
                                            >
                                                {menu}
                                            </PipelineMenu>
                                        ) : (
                                            <PipelineMenuDisable
                                                key={menuIndex}
                                                onClick={() =>
                                                    setMenu(index, menu)
                                                }
                                            >
                                                {menu}
                                            </PipelineMenuDisable>
                                        ),
                                    )}
                                </>
                            ) : (
                                <PipelineTitleDisable
                                    onClick={() => selectPipeline(index)}
                                >
                                    <ProductTitle>
                                        <ProductImageSmallDisable
                                            src={item.logo}
                                        />
                                        파이프라인
                                    </ProductTitle>
                                    <div className="material-symbols-rounded">
                                        Expand_more
                                    </div>
                                </PipelineTitleDisable>
                            )}
                        </Pipeline>
                    ))}
                </SidebarContent>
            </Sidebar>
            <PageContainer>
                <DashBoardHeader>
                    <HeaderContent>
                        <AddButton>
                            <div className="material-symbols-rounded">Add</div>
                            새 파이프라인
                        </AddButton>
                        <AlaramButton>
                            <div className="material-symbols-rounded">
                                Notifications
                            </div>
                        </AlaramButton>
                        <ProfilePicture />
                    </HeaderContent>
                </DashBoardHeader>
                <DashBoardPage>
                    <DashBoardContent>
                        <DashBoardTitle>{selectedMenu.menu}</DashBoardTitle>
                        <DashBoardDescription>
                            {
                                menuDescription[
                                    menuList.findIndex(
                                        (v) => v === selectedMenu.menu,
                                    )
                                ]
                            }
                        </DashBoardDescription>
                        {selectedMenu.pipeline !== null && (
                            <>
                                {selectedMenu.menu == '제품 개요' && (
                                    <ProductOverviewContainer>
                                        <ProductOverview>
                                            <ProductImage
                                                src={
                                                    pipelines[
                                                        selectedMenu.pipeline
                                                    ].logo
                                                }
                                            />
                                            <ProductInfo>
                                                <ProductCategory>
                                                    #
                                                    {
                                                        pipelines[
                                                            selectedMenu
                                                                .pipeline
                                                        ].overview.category
                                                    }
                                                </ProductCategory>
                                                <ProductTitleText>
                                                    {
                                                        pipelines[
                                                            selectedMenu
                                                                .pipeline
                                                        ].name
                                                    }
                                                </ProductTitleText>
                                                <ProductDescription>
                                                    {
                                                        pipelines[
                                                            selectedMenu
                                                                .pipeline
                                                        ].overview.description
                                                    }
                                                </ProductDescription>
                                            </ProductInfo>
                                        </ProductOverview>
                                        <ProductAction>
                                            <Button1>
                                                <div className="material-symbols-rounded">
                                                    Add
                                                </div>
                                                투명화 코드 생성
                                            </Button1>
                                            <Button2>
                                                <div className="material-symbols-rounded">
                                                    Add
                                                </div>
                                                초대 코드 생성
                                            </Button2>
                                        </ProductAction>
                                        <SubTitle>참여 기업</SubTitle>
                                        <ProductParticipations>
                                            {pipelines[
                                                selectedMenu.pipeline
                                            ].overview.participations.map(
                                                (
                                                    item: ParticipationType,
                                                    index: number,
                                                ) => (
                                                    <Participation
                                                        companyLogo={
                                                            item.companyLogo
                                                        }
                                                        companyName={item.name}
                                                        description={
                                                            item.description
                                                        }
                                                        key={index}
                                                    />
                                                ),
                                            )}
                                        </ProductParticipations>
                                    </ProductOverviewContainer>
                                )}
                                {selectedMenu.menu == '유통 과정' && (
                                    <ProductCirculationContainer>
                                        <SearchBar>
                                            <div
                                                className="material-symbols-rounded"
                                                style={{
                                                    width: '24px',
                                                }}
                                            >
                                                Search
                                            </div>
                                            <SearchInput placeholder="검색어를 입력해주세요" />
                                        </SearchBar>
                                        <ProductCirculations>
                                            {pipelines[
                                                selectedMenu.pipeline
                                            ].circulations.map(
                                                (
                                                    circulation: CirculationType[],
                                                    index: number,
                                                ) => (
                                                    <ProductCirculationHorizontal
                                                        key={index}
                                                    >
                                                        {circulation.map(
                                                            (
                                                                item: CirculationType,
                                                                circulationIndex: number,
                                                            ) => (
                                                                <Circulation
                                                                    key={
                                                                        circulationIndex
                                                                    }
                                                                    name={
                                                                        item.name
                                                                    }
                                                                    companyTitle={
                                                                        item.companyTitle
                                                                    }
                                                                    companyLogo={
                                                                        item.companyLogo
                                                                    }
                                                                    role={
                                                                        item.role
                                                                    }
                                                                    description={
                                                                        item.description
                                                                    }
                                                                ></Circulation>
                                                            ),
                                                        )}
                                                    </ProductCirculationHorizontal>
                                                ),
                                            )}
                                        </ProductCirculations>
                                    </ProductCirculationContainer>
                                )}
                                {selectedMenu.menu == '투명화' && (
                                    <ProductOverviewContainer>
                                        <ProductOverview>
                                            <ProductImage
                                                src={
                                                    pipelines[
                                                        selectedMenu.pipeline
                                                    ].logo
                                                }
                                            />
                                        </ProductOverview>
                                    </ProductOverviewContainer>
                                )}
                                {selectedMenu.menu === '설정' && (
                                    <ProductOverviewContainer>
                                        <ProductOverview>
                                            <ProductImage
                                                src={
                                                    pipelines[
                                                        selectedMenu.pipeline
                                                    ].logo
                                                }
                                            />
                                        </ProductOverview>
                                    </ProductOverviewContainer>
                                )}
                            </>
                        )}
                    </DashBoardContent>
                </DashBoardPage>
            </PageContainer>
        </DashBoardContainer>
    );
};

const ProductCirculations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 70px;
`;

const ProductCirculationHorizontal = styled.div`
    display: grid;
    gap: 23px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ProductCirculationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1025px;
    margin-top: 30px;
`;

const SearchBar = styled.div`
    display: flex;
    padding: 12px 16px;
    gap: 10px;

    width: 900px;
    height: 27px;
    align-items: center;

    background: #fafafb;
    border-radius: 8px;
    color: #8d8d8d;
`;

const SearchInput = styled.input`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    background: none;
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    }
    outline: none;
    &::placeholder {
        color: #bbbbbb;
    }
`;

const ProductParticipations = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;
    margin-top: 3px;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 25px;
    color: #000000;
    padding-left: 9px;
`;

const ProductAction = styled.div`
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    gap: 20px;
`;

const Button1 = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    padding: 11px 19px;
    background: #8fd894;
    display: flex;
    align-items: center;
    border-radius: 5px;
    gap: 6px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #8cce91;
        color: #e8e8e8;
    }
`;

const Button2 = styled.div`
    font-weight: 600;
    font-size: 16px;
    background: #f0fbf1;
    padding: 11px 19px;
    color: #8fd894;
    display: flex;
    align-items: center;
    border-radius: 5px;
    gap: 6px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #8cce91;
        background: #dfede1;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const ProductCategory = styled.div`
    font-weight: 500;
    font-size: 22px;

    color: #bdbdbd;
`;

const ProductTitleText = styled.div`
    font-weight: 700;
    font-size: 32px;

    color: #3d3d3d;
    margin-top: 13px;
`;

const ProductDescription = styled.div`
    font-weight: 300;
    font-size: 21px;
    line-height: 35px;
    margin-top: 32px;
    color: #7d7d7d;
`;

const ProductImage = styled.img`
    width: 260px;
    height: 260px;
    border: 1px solid #efefef;
    border-radius: 5px;
`;

const ProductImageSmall = styled.img`
    width: 24px;
    height: 24px;
    border: 1px solid #efefef;
    border-radius: 50%;
`;

const ProductImageSmallDisable = styled.img`
    width: 24px;
    height: 24px;
    border: 1px solid #efefef;
    border-radius: 50%;
    filter: grayscale(80%);
`;

const ProductOverview = styled.div`
    display: flex;
    gap: 42px;
`;

const ProductOverviewContainer = styled.div`
    display: flex;
    gap: 23px;
    flex-direction: column;
    margin-top: 40px;
    width: 1033px;
`;

const DashBoardDescription = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #7d7d7d;
    padding-top: 10px;
`;

const DashBoardContent = styled.div`
    margin: 76px 0 0 110px;
    display: flex;
    flex-direction: column;
`;

const DashBoardTitle = styled.div`
    font-weight: 600;
    font-size: 28px;
    color: #3d3d3d;
`;

const Pipeline = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
`;

const PipelineMenu = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 14px 0 14px 40px;
    color: #3d3d3d;
    cursor: pointer;
`;

const PipelineMenuDisable = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: #bdbdbd;
    padding: 14px 0 14px 40px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #7b7b7b;
    }
`;

const ProductTitle = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
`;

const PipelineTitle = styled.div`
    display: flex;
    padding: 10px 14px;
    background-color: #ffffff;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    color: #3d3d3d;
    cursor: pointer;
`;

const PipelineTitleDisable = styled.div`
    display: flex;
    padding: 10px 14px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    color: #bdbdbd;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #7b7b7b;
    }
`;

const Logo = styled.div`
    width: 113px;
    height: 36px;
    padding-bottom: 20px;
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 14px;
`;

const ProfilePicture = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f5f6f7;
`;

const AlaramButton = styled.div`
    border-radius: 50%;
    background: #f5f6f7;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddButton = styled.div`
    display: flex;
    padding: 4px 20px 4px 8px;
    gap: 8px;
    background: #f5f6f7;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #565656;
`;

const HeaderContent = styled.div`
    display: flex;
    width: 100%;
    padding: 0 72px;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
`;

const DashBoardPage = styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 15px 0px 0px 0px;
    min-height: 100%;
    margin: 60px 0 0 288px;
    overflow: scroll;
`;

const PageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #ffffff;
`;

const DashBoardHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

const DashBoardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: absolute;
`;

const Sidebar = styled.div`
    width: 260px;
    padding: 0 14px;
    background-color: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    overflow: scroll;
    z-index: 9999;
    border-right: 2px solid #f6f6fc;
`;

export default DashBoard;
