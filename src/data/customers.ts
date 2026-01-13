import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type Product = {
    companyId: string
    name: string
    address: string
    phoneNumber: number
    website: number
	npwp: string
    id: string
    createdAt: string
    createdBy: string
    updatedAt: string
    updatedBy: string
    deletedAt: string
    deletedBy: string
     
}

// Define the type for the data parameter
type ProductQueryParams = {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    filters?: {
        name?: string;
        address?: string;
        phoneNumber?: string;
    };
};

const products: Product[] = [
     {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV ANUGERAH ABADI MAGELANG",
        "address": "DUSUN Jalan Demesan DESA No.04/02, Dusun VIII, Girirejo, Kec. Tempuran, Kabupaten Magelang, Jawa Tengah 56161",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "438fba91-cf52-4697-94f9-fe074c257328",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": "2025-12-15T19:40:28.00629Z",
        "updatedBy": "syarif@polluxintegra.co.id",
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BATANG APPAREL INDONESIA",
        "address": "JL. SENDANG TULIS, DUKUH NANOM Blok 000 No.000 RT:001 RW:001 Kel.WRINGIN GINTUNG Kec.TULIS Kota/Kab.BATANG JAWA TENGAH 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "f91f9655-e488-47e3-b46f-80afcaeab80a",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BERLIAN MULIA CIPTA",
        "address": "Cikopo Raya No. 9 Blok 0000 No.0000 RT:010 RW:004 Kel.Bungursari Kec.Bungursari Kota/Kab.Purwakarta Jawa Barat 41181",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "d9424256-ca32-4fdc-9abe-f2d6b61d887d",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BIG GOLDEN BELL",
        "address": "JL. LASWI KM.16 Blok 000 No.168 RT:000 RW:000 Kel.JELEKONG Kec.BALEENDAH Kota/Kab.BANDUNG JAWA BARAT 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "dcc258f2-c903-4404-8b6c-54085e054f59",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BROTHERSINDO SAUDARA SEJATI",
        "address": "KOMP. MANGGA DUA PLAZA Blok H No.5 B RT:000 RW:000 Kel.MANGGA DUA SELATAN Kec.- Kota/Kab.JAKARTA PUSAT JAWA BARAT 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "2723d477-8429-4005-a247-4b094b73d3e6",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BUMA APPAREL INDUSTRY",
        "address": "Raya Purwadadi Dusun Kaliangbawang Blok 0000 No.0000 RT:015 RW:008 Kel.Wanakerta Kec.Purwadadi Kota/Kab.Subang Jawa Barat 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "65dcd338-f4d9-4745-987d-5e525186a1d6",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BUSANA INDAH GLOBAL",
        "address": "KP. PABUARAN Blok 000 No.000 RT:001 RW:001 Kel.CIHEULANGTONGGOH Kec.CIBADAK Kota/Kab.SUKABUMI JAWA BARAT 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "59ca69e3-494f-4c70-bb27-05129b638da1",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BUSANA PRIMA CEMERLANG",
        "address": "Sumberjaya, Kec. Sumberjaya, Kabupaten Majalengka, Jawa Barat 45455",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "0eda521c-f525-4a2d-9df7-7b6c9fecec3a",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV BUSANA PRIMA GLOBAL",
        "address": "JL. Mercedes Benz Cicadas Blok 000 No.223 A RT:000 RW:000 Kel.Cicadas Kec.Gunung Putri Kota/Kab.Bogor Jawa Barat 16964",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "87a5337e-7023-4531-9cda-235b8ce75ddd",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      },
      {
        "companyId": "14b9a9cc-dc7a-4b75-9ea1-ae89be0be596",
        "name": "CV C-SITE TEXPIA",
        "address": "KP. WARUNG NANGKA Blok 0000 No.0000 RT:003 RW:005 Kel.CIASEM BARU Kec.CIASEM Kota/Kab.SUBANG JAWA BARAT 00000",
        "phoneNumber": null,
        "email": null,
        "website": null,
        "npwp": null,
        "id": "9e72d906-9ac9-4e1e-af98-cb38e93e5f75",
        "createdAt": "2025-12-05T12:43:39.037327Z",
        "createdBy": null,
        "updatedAt": null,
        "updatedBy": null,
        "deletedAt": null,
        "deletedBy": null
      }
]

export const getProducts = createServerFn({ method: "GET" })
    .inputValidator(
        z.object({
            page: z.number().default(0),
            pageSize: z.number().default(10),
            sortBy: z.string().optional(),
            sortOrder: z.enum(["asc", "desc"]).optional(),
            filters: z
                .object({
                    name: z.string().optional(),
                    category: z.string().optional(),
                    status: z.string().optional(),
                })
                .optional(),
        })
    )
    .handler(async ({ data }: { data: ProductQueryParams }) => {
        const { page, pageSize, sortBy, sortOrder, filters } = data;

        // Apply filters
        let filteredProducts = [...products];

        if (filters) {
            if (filters.name) {
                filteredProducts = filteredProducts.filter((product) =>
                    product.name.toLowerCase().includes(filters.name!.toLowerCase())
                );
            }

            if (filters.category) {
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.category.toLowerCase() === filters.category!.toLowerCase()
                );
            }

            if (filters.status) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.status === filters.status
                );
            }
        }

        // Apply sorting
        if (sortBy) {
            filteredProducts.sort((a, b) => {
                const aValue = a[sortBy as keyof Product];
                const bValue = b[sortBy as keyof Product];

                if (typeof aValue === "string" && typeof bValue === "string") {
                    return sortOrder === "desc"
                        ? bValue.localeCompare(aValue)
                        : aValue.localeCompare(bValue);
                }

                if (typeof aValue === "number" && typeof bValue === "number") {
                    return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
                }

                return 0;
            });
        }

        // Calculate pagination
        const totalCount = filteredProducts.length;
        const totalPages = Math.ceil(totalCount / pageSize);
        const paginatedProducts = filteredProducts.slice(
            page * pageSize,
            (page + 1) * pageSize
        );

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
            products: paginatedProducts,
            pagination: {
                page,
                pageSize,
                totalCount,
                totalPages,
            },
        };
    });
