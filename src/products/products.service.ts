import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products: any[] = [
        {
            id: 1,
            name: '2mp Camera',
            category: 'IP Camera',
            brand: 'Hikvision',
            isNightVision: true,
            price: 100,
        },
        {
            id: 2,
            name: '4mp Camera',
            category: 'IP Camera',
            brand: 'Hikvision',
            isNightVision: true,
            price: 200,
        },
        {
            id: 3,
            name: '8mp Camera',
            category: 'IP Camera',
            brand: 'Hikvision',
            isNightVision: true,
            price: 300,
        },
        {
            id: 4,
            name: '16mp Camera',
            category: 'HD Camera',
            brand: 'CP Plus',
            isNightVision: true,
            price: 400,
        },
        {
            id: 5,
            name: '2mp Camera',
            category: 'HD Camera',
            brand: 'CP Plus',
            isNightVision: true,
            price: 100,
        },
    ];

    getAllProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find((product: any) => product.id === id);
    }
}
