// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },

    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },

    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },

    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
    {
        productLogo: 'http://assabeer.com/web/product/small/a_83.jpg',
        productName: '델몬트 망고바',
        description:
            '새콤달콤 시원한 간식, 기분 좋은 여유를 선사하는 빙과예요. 망고농축퓨레 등을 넣어... 내용 내용 내용 내용 내용',
    },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(data);
}
