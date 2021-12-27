import { Form, redirect, useActionData, useTransition } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { createPost } from "~/posts";

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
};

export const action: ActionFunction = async ({request}) => {
  await new Promise(res => setTimeout(res, 1000));

  const formatData = await request.formData()

  const title = formatData.get('title')
  const slug = formatData.get('slug')
  const markdown = formatData.get('markdown')

  const errors: PostError = {}
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");
  await createPost({title, slug, markdown})
  
  return redirect('/admin') 
}

export default function NewPost() {
  const errors = useActionData();
  const transition = useTransition();
  
  return (
    <Form method="post">
       <p>
        <label>
          Post Title: <input type="text" name="title" />
          {errors?.title && <em>Title is required</em>}
        </label>
      </p>
      <p>
        <label>
          Post Slug: <input type="text" name="slug" />
          {errors?.slug && <em>Slug is required</em>}
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        <br />
        <textarea id="markdown" rows={20} name="markdown" />
        {errors?.markdown && <em>Markdown is required</em>}
      </p>
      <p>
        <button type="submit">
          {transition.submission
            ? "Creating..."
            : "Create Post"
          }
        </button>
      </p>
    </Form>
  );
}