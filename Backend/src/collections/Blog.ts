import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Blog = {
  slug: 'blog',
  labels: {
      singular: 'Blog',
      plural: 'Blog',
  },
  access: {
      read: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
  },
    {
      name: "description",
      type: "textarea",
      required: true,
      minLength: 40,
      maxLength: 160,
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
    },
    {
      name: "postImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },
  ],

  hooks: {
    afterChange: [
      async (args) => {
        console.log('afterChange - operation:', args.operation);
        if (args.operation === 'create' || args.operation === 'update') {
          if (args.doc && args.doc.id) {
            await payload.create({
              collection: 'log',
              data: {
                collection: 'blog',
                collections: `blog ${args.previousDoc.id}`,
                blogId: args.doc.id,
                action: args.operation,
                timestamp: new Date(),
              },
            });
          }
        }
      },
    ],
    afterOperation: [
      async (args) => {
        console.log('afterOperation - operation:', args.operation);
        if (args.operation === 'findByID') {
          if (args.doc && args.doc.id) {
            await payload.create({
              collection: "log",
              data: {
                collection: 'blog',
                blogId: args.doc.id,
                action: args.operation,
                timestamp: new Date(),
              },
            });
          }
        }
      },
    ],
    afterDelete: [
      async (args) => {
        console.log('afterDelete - operation:', args.operation);
        if (args.doc && args.doc.id) {
          await payload.create({
            collection: "log",
            data: {
              collection: 'blog',
              blogId: args.doc.id,
              action: 'delete',
              timestamp: new Date(),
            },
          });
        }
      },
    ],
  }
};  

export default Blog