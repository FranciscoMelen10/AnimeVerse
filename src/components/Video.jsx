export default function Video({ video }) {
  // console.log(typeof video);
  // If video is null, doesn't show it
  return (
    <iframe
      src={video}
      loading="lazy"
      className="w-[700px] h-[500px] max-md:w-full max-md:h-[350px] "
    />
  );
}
