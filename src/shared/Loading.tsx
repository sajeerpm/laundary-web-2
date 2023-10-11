import LoadingImage from "@/assets/images/loading.gif";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-transparent bg-opacity-50">
      <img
        className="animate-bounce"
        src={LoadingImage}
        alt="Dry Cleaning London"
      />
    </div>
  );
};

export default Loading;
