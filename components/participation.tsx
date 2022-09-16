import styled from '@emotion/styled';

interface ParticipationProps {
    companyName: string;
    companyLogo: string;
    description: string;
}

const Participation: React.FC<ParticipationProps> = ({
    companyLogo,
    companyName,
    description,
}) => {
    return (
        <ParticipationBox>
            <CompanyProfile>
                <CompanyLogo src={companyLogo} />
                {companyName}
            </CompanyProfile>
            <CompanyDescription>{description}</CompanyDescription>
        </ParticipationBox>
    );
};

const CompanyDescription = styled.div`
    font-weight: 400;
    font-size: 19px;
    line-height: 29px;

    color: #6d6d6d;
`;

const CompanyLogo = styled.img`
    width: 27px;
    height: 27px;
`;

const ParticipationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 23px;
    gap: 24px;
    width: 280px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.02);
    border-radius: 12px;
`;

const CompanyProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    color: #3d3d3d;
`;

export default Participation;
