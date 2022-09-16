// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
    {
        name: '델몬트 망고바',
        overview: {
            category: ['식품'],
            participations: [
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
            ],
            company: '롯데푸드',
            description:
                '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어 상큼한 맛을 자랑하죠. 서걱서걱하게 씹히는 시원한 식감이 먹는 즐거움을 더해준답니다. 입안을 달달하게 채워줄 간식으로 즐겨보세요.',
        },
        selected: false,
        logo: 'http://assabeer.com/web/product/small/a_83.jpg',
        circulations: [
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
        ],
    },
    {
        name: '델몬트 망고바',
        overview: {
            category: ['식품'],
            participations: [
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
            ],
            company: '롯데푸드',
            description:
                '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어 상큼한 맛을 자랑하죠. 서걱서걱하게 씹히는 시원한 식감이 먹는 즐거움을 더해준답니다. 입안을 달달하게 채워줄 간식으로 즐겨보세요.',
        },
        selected: false,
        logo: 'http://assabeer.com/web/product/small/a_83.jpg',
        circulations: [
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
        ],
    },
    {
        name: '델몬트 망고바',
        overview: {
            category: ['식품'],
            participations: [
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
                {
                    name: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    description:
                        '고객 감동을 위한 실천, 롯데푸드 1958년 창사 이래로 한결같이 고객 감동을 실천하고자 끊임없이 노력하고 있습니다.',
                },
            ],
            company: '롯데푸드',
            description:
                '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어 상큼한 맛을 자랑하죠. 서걱서걱하게 씹히는 시원한 식감이 먹는 즐거움을 더해준답니다. 입안을 달달하게 채워줄 간식으로 즐겨보세요.',
        },
        selected: false,
        logo: 'http://assabeer.com/web/product/small/a_83.jpg',
        circulations: [
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
            [
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
                {
                    name: '델몬트 망고바 관리',
                    companyTitle: '롯데푸드',
                    companyLogo:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lotte_%22Value_Line%22_logo.svg/800px-Lotte_%22Value_Line%22_logo.svg.png',
                    role: '제품 관리',
                    description:
                        '제품을 기획하고 개발 및 생산 상황을 감독하고 관리합니다. ',
                },
            ],
        ],
    },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data);
}
