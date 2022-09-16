import styled from '@emotion/styled';

interface ProductProps {
    productName: string;
    productLogo: string;
    description: string;
}

const Product: React.FC<ProductProps> = ({
    productLogo,
    productName,
    description,
}) => {
    return (
        <ProductBox>
            <ProductLogo src={productLogo} />
            <ProductInfo>
                <ProductName>{productName}</ProductName>
                <ProductDescription>{description}</ProductDescription>
            </ProductInfo>
        </ProductBox>
    );
};

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ProductName = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #3d3d3d;
`;

const ProductDescription = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    color: #6d6d6d;
`;

const ProductLogo = styled.img`
    width: 106px;
    height: 106px;
`;

const ProductBox = styled.div`
    display: flex;
    padding: 32px;
    gap: 12px;
    width: 464px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.02);
    border-radius: 16px;
`;

export default Product;
