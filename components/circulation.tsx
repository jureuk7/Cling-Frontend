import styled from '@emotion/styled';

interface CirculationProps {
    name: string;
    companyTitle: string;
    companyLogo: string;
    role: string;
    description: string;
}

const Circulation: React.FC<CirculationProps> = ({
    companyLogo,
    companyTitle,
    role,
    description,
    name,
}) => {
    return (
        <CirculationBox>
            <CirculationName>{name}</CirculationName>
            <CompanyAndRole>
                <CompanyProfile>
                    <CompanyLogo src={companyLogo} />
                    {companyTitle}
                </CompanyProfile>
                <Role>{role}</Role>
            </CompanyAndRole>
            <CompanyDescription>{description}</CompanyDescription>
        </CirculationBox>
    );
};

const CompanyAndRole = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const CirculationName = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #3d3d3d;
`;

const Role = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7d7d7d;
`;

const CompanyDescription = styled.div`
    font-weight: 400;
    font-size: 19px;
    line-height: 29px;
    color: #6d6d6d;
`;

const CompanyLogo = styled.img`
    width: 24px;
    height: 24px;
`;

const CirculationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 12px;
    width: 280px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.02);
    border-radius: 12px;
`;

const CompanyProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #3d3d3d;
`;

export default Circulation;
