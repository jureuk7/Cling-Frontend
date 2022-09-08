import * as React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface ILink {
    path: string;
    name: string;
}

const LinkData: ILink[] = [
    { path: '/company', name: '기업탐색' },
    { path: '/transfer', name: '유통구조' },
    { path: '/product', name: '생산라인' },
];

interface IHeader {
    modalView: boolean;
    setModalView: any;
}

const Header: React.FC = () => {
    const router = useRouter();
    const logout = () => {
        console.log('hi');
        router.push('/login');
    };

    return (
        <Container>
            <HeaderContainer>
                <Logo>
                    <img src="/images/logo.svg" alt="로고" />
                </Logo>
                <Actions>
                    <LinkList>
                        {LinkData.map((item, index) =>
                            item.path === router.asPath ? (
                                <li key={index}>
                                    <ActiveLink href={item.path}>
                                        {item.name}
                                    </ActiveLink>
                                </li>
                            ) : (
                                <li key={index}>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            ),
                        )}
                    </LinkList>
                    <Action>
                        <SearchBar>
                            <SearchInput placeholder="검색어를 입력해주세요" />
                            <Icon className="material-symbols-rounded">
                                Search
                            </Icon>
                        </SearchBar>
                        <Link href="/login">로그인</Link>
                    </Action>
                </Actions>
            </HeaderContainer>
        </Container>
    );
};

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 46px;
`;

const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 17px;
    width: 192px;
    height: 14px;

    background: rgba(235, 236, 243, 0.45);
    border-radius: 24px;
`;

const SearchInput = styled.input`
    color: #b4b7ca;
    font-size: 12px;
    background: none;
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    }
    outline: none;
    &::placeholder {
        color: #b4b7ca;
    }
`;

const Icon = styled.span`
    font-size: 14px;
    color: #9298ab;
`;

const Action = styled.div`
    display: flex;
    gap: 34px;
    align-items: center;
`;

const LinkList = styled.ul`
    list-style: none;
    display: flex;
    gap: 52px;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 113px;
    height: 36px;
    cursor: pointer;
`;

const Link = styled.a`
    color: #a4a4a4;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #000000;
    }
`;

const ActiveLink = styled.a`
    color: #383838;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #383838;
    }
`;

const Container = styled.div`
    background: white;
    width: 100vw;
    height: 60px;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    border-bottom: 1px solid #f6f6fc;
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 1100px;
    height: 100%;
    justify-content: space-between;
`;
export default Header;
