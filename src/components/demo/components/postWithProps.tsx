type PostProps = {
  title: string;
  content: string;
};

function PostWithProps({ title, content }: PostProps) {
  return (
    <div className="w-[20rem] border-blue-500 border rounded-md p-2">
      <h2>{title}</h2>
      <p className="opacity-80">{content}</p>
    </div>
  );
}

export default PostWithProps;
