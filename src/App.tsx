// TODO: make img into a button, change hover effect to

export default function App() {
  return (
    <main className="min-h-screen  bg-main-bg px-6 pt-16 text-white">
      <h1 className="sr-only">NFT Preview Card</h1>
      <div className="mx-auto max-w-96 rounded-2xl bg-card-bg p-6">
        <div className="relative">
          <a
            tabIndex={0}
            aria-label="Equilibrium Purchase Page"
            className="cursor-pointer before:absolute before:flex before:h-full before:w-full before:items-center before:justify-center before:rounded-xl before:bg-overlay before:opacity-0 before:transition-opacity before:content-[url(/images/icon-view.svg)] before:hover:opacity-100"
          >
            <img
              className=" mb-8 rounded-xl "
              src="/images/image-equilibrium.jpg"
              alt=""
            />
          </a>
        </div>

        <a
          tabIndex={0}
          aria-label="Equilibrium Purchase Page"
          className="mb-4 block cursor-pointer text-2xl font-outfit-600 hover:text-cyan"
        >
          Equilibrium #3429
        </a>
        <p className="text-m pb-6 text-soft-blue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center">
          <img className="h-5 pr-2" src="/images/icon-ethereum.svg" alt="" />
          <span className="grow font-outfit-600 text-cyan">0.041 ETH</span>
          <img className="h-5 pr-2" src="/images/icon-clock.svg" alt="" />
          <span className="text-soft-blue">3 days left</span>
        </div>
        <div className="my-4 border-b border-soft-blue border-opacity-30"></div>
        <div className=" flex items-center">
          <img
            className="mr-4 h-10 rounded-full border"
            src="/images/image-avatar.png"
            alt="Jules Wyvern avatar"
          />
          <span className="text-soft-blue">
            Creation of
            <a
              tabIndex={0}
              aria-label="Jules Wyvern Profile Page"
              className="cursor-pointer text-white hover:text-cyan"
            >
              Jules Wyvern
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
