export default function ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="p-8 px-6 rounded-3xl bg-[white] min-w-full [&>p]:mb-4 text-sm">
      <p>
        Hello. My name is Kingsley Okafor. This is a way for me to talk about
        some decisions I made while I worked on this. Please dismiss this if you
        think its unnecessary.
      </p>
      <p>
        First of all, except to implement the chart, I decided to build the
        entire application without any extra dependencies in order to make the
        app as lean as possible and also to stand out.
      </p>
      <p>
        Secondly, although making the website responsive wasn't part of the
        assessment, I paid attention to that for some screen sizes. (It is NOT
        mobile responsive). However, to see the implementation of the actual
        design, please view with a desktop or a device with a screen size{" "}
        <strong>above 1024px.</strong>
      </p>
      <p>
        Thirdly, I added loading states for when data from the API is being
        fetched dynamically.
      </p>
      <p>
        Finally, I want to commend the UI/UX designer who worked on this. The
        design is really clean. Thumbs up!!!
      </p>
      <p>
        Please go through my code and if possible I would love to hear your
        thoughts about how well I did on this project. It took me about 6 hours
        in total to complete. You can email me on{" "}
        <a className="underline" href="mailto:nonsokingsley61@gmail.com">
          nonsokingsley61@gmail.com
        </a>
        . Thank you.
      </p>
      <button
        className="bg-dxp-green-1 text-[white] p-2 px-3 rounded-full flex justify-center w-full mt-10"
        onClick={() => setShowModal(false)}
      >
        Dismiss
      </button>
    </div>
  );
}
