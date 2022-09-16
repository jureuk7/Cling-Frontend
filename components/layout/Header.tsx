import * as React from 'react';
import styled from '@emotion/styled';

const Header: React.FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <Logo>
                    <img src="/images/logo.svg" alt="로고" />
                </Logo>
                <Actions>
                    <Action>
                        <SearchBar>
                            <SearchInput placeholder="제품명 검색" />
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
    color: #000000;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
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
