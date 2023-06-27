const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlists";

export async function getServerSideProps() {
  const playlistId = "PL6_D0QdiaJwTk3mtUv_6uiKwMGJeEaSMG"; // substitua pelo ID da sua lista de reprodução
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL6_D0QdiaJwTk3mtUv_6uiKwMGJeEaSMG&maxResults=50&key=AIzaSyDKO2boRf_u4Gg8y71Pi4m3Ng4q_6doy1c`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function VideoL({ data }) {
  console.log("data", data);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ul className="space-y-4">
          {data.items.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li
                key={id}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="relative h-0"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={medium.url}
                      alt={title}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{title}</h3>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
