// sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'tfz40693',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-06-08', // use current date (YYYY-MM-DD) to target the latest API version
    token: "skBme0JvcMhXtXvTIE4tp0cbhP9YXlsMAeRE2qAnmpuOawrOE4T5fJd5AqOH6FYLIm5VOD8Np6rpwLC7Op6Q6zFsyjDdb3gmjw3uUz9fl14mSxQQgYyjjg721CQtOGXBV5RNt9kRrMwnkp1apAg6yHnc46zXPudT0C9m1vNzURX3lPdKKQGv" // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
    return builder.image(source)
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//     const posts = await client.fetch('*[_type == "post"]')
//     return posts
// }

// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
// }

// export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({ title })
//     return result
// }