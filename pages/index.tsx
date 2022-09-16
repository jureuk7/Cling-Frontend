import type { NextPage } from 'next';
import Header from '../components/layout/Header';
import styled from '@emotion/styled';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';

const getPipelines = () => {
    return axios.get('http://localhost:3000/api/products').then((response) => {
        console.log(response.data);
        return response.data;
    });
};

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['products'], getPipelines);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const Home: NextPage = (prop) => {
    return (
        <Container>
            <Header />
            <HomeContainer>
                <PageTitle>
                    제품의 투명한<br></br>
                    생산, 유통 과정을 확인하세요
                </PageTitle>
                <HomeAction>
                    <DropDown>
                        제품명
                        <div
                            className="material-symbols-rounded"
                            style={{
                                width: '24px',
                            }}
                        >
                            Expand_more
                        </div>
                    </DropDown>
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
                </HomeAction>
                <ProductList>
                    {)}
                </ProductList>
            </HomeContainer>
        </Container>
    );
};

const ProductList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 44px;
`;

const DropDown = styled.div`
    display: flex;
    padding: 10px 24px;
    gap: 12px;
    width: 120px;
    height: 28px;
    font-size: 18px;

    align-items: center;
    justify-content: space-between;
    background: #f3f4f6;
    border-radius: 28px;
    color: #3d3d3d;
`;

const SearchBar = styled.div`
    display: flex;
    padding: 10px 16px;
    gap: 12px;
    width: 576px;
    height: 28px;
    align-items: center;
    background: #f3f4f6;
    border-radius: 28px;
    color: #8d8d8d;
`;

const SearchInput = styled.input`
    font-weight: 500;
    font-size: 19px;
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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1100px;
`;

const PageTitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 55px;
    text-align: center;

    color: #3d3d3d;
    margin-top: 170px;
`;

const HomeAction = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 60px;
`;

export default Home;
