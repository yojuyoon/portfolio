import Sad from "src/assets/svgs/Sad.svg?react";

function Error() {
  return (
    <div className="flex items-center justify-center flex-col text-center h-100svh">
      <span className="text-lightGray mb-30">
        <Sad />
      </span>
      Unable to fetch the blog post at the moment.
      <br />
      Please check the posts at the following URL!
      <a
        href="https://medium.com/@hannahyoon1121"
        className="underline text-focus mt-20"
        target="_blank"
      >
        https://medium.com/@hannahyoon1121
      </a>
    </div>
  );
}

export default Error;
