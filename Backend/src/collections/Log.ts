import { CollectionConfig } from 'payload/types';

const Log: CollectionConfig = {
    slug: 'log',
    labels: {
        singular: 'Log',
        plural: 'Log',
    },
    fields: [
        {
            name: 'blogId',
            label: 'blogId',
            type: 'relationship',
            required: true,
            relationTo: 'blog'
        },
        {
            name: 'action',
            label: 'Action',
            type: 'text',
            required: true,
        },
        {
            name: 'timestamp',
            label: 'Timestamp',
            type: 'date',
            required: true,
        },
    ],
    access: {
        read: () => true,
        create: () => false,
        update: () => false,
        delete: () => true,
    },
};

export default Log;