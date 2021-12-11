import { useLoaderData } from "remix"
import invariant from 'tiny-invariant';
import { getPost } from "~/posts";

import type { LoaderFunction } from "remix"
import type { Post } from "~/posts"

export const loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData<Post>()

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )
}
