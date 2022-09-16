import styled from '@emotion/styled';

interface ProductProps {
    date: string;
    qrcodeImage: string;
    companyTitle: string;
    companyLogo: string;
}

const TransparentCode: React.FC<ProductProps> = ({
    date,
    qrcodeImage,
    companyTitle,
    companyLogo,
}) => {
    return (
        <TransparentCodeBox>
            <Flex>
                <CompanyProfile>
                    <CompanyLogo src={companyLogo} />
                    {companyTitle}
                </CompanyProfile>
                <div
                    className="material-symbols-rounded"
                    style={{
                        width: '24px',
                        color: '#8FD894',
                    }}
                >
                    Content_copy
                </div>
            </Flex>

            <QRCodeImage src={qrcodeImage} />
            <Shortcut>보고서 바로가기</Shortcut>
            <Date>{date}</Date>
        </TransparentCodeBox>
    );
};

const CompanyProfile = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    color: #3d3d3d;
`;

const CompanyLogo = styled.img`
    width: 24px;
    height: 24px;
`;

const Date = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #7d7d7d;
`;

const Shortcut = styled.div`
    margin-top: 16px;
    font-weight: 700;
    font-size: 14px;
    color: #3d3d3d;
`;

const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const QRCodeImage = styled.img`
    width: 74px;
    height: 74px;
    margin-top: 30px;
`;

const TransparentCodeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 12px;
    width: 160px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    border-radius: 6px;
`;

export default TransparentCode;
