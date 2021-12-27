import type { LoaderFunction } from "remix"
import { useLoaderData } from "remix"
import invariant from 'tiny-invariant';
import { getPost } from "~/posts";

export const loader: LoaderFunction = async ({params}) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}
