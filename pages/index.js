import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build a Timeline Tracker with Cloudinary, Xata and NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="relative container mx-auto px-6 flex flex-col space-y-2">

          <div className="flex flex-col space-y-4 pb-10">
            <header className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-4xl font-bold text-center">Build a Timeline Tracker with Cloudinary, Xata and NextJs
              </h1>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create a Timeline
              </button>
            </header>
          </div>


          <div class="relative right-40">
            <div
              className="absolute z-0 w-2 h-full bg-white shadow-md inset-10 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div className="relative z-10">
              <Image
                src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                alt=""
                className="timeline-img"
                width={100}
                height={100}
              />
              <div className="timeline-container">
                <div className="timeline-pointer" aria-hidden="true"></div>
                <div className="bg-white p-6 rounded-md shadow-md">
                  <span
                    className="font-bold text-indigo-600 text-sm tracking-wide"
                  >Jan 2021</span
                  >
                  <h1 className="text-2xl font-bold pt-1 text-gray-900">
                    An amazing travel
                  </h1>
                  <p className="pt-1 text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Ex iste suscipit reiciendis, perferendis vel
                    consequuntur cupiditate ad commodi provident,
                    sapiente veniam sed autem.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <Image
                src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                alt=""
                className="timeline-img"
                width={100}
                height={100}
              />
              <div className="timeline-container">
                <div className="timeline-pointer" aria-hidden="true"></div>
                <div className="bg-white p-6 rounded-md shadow-md">
                  <span
                    className="font-bold text-indigo-600 text-sm tracking-wide"
                  >Jan 2021</span
                  >
                  <h1 className="text-2xl font-bold pt-1 text-gray-900">
                    An amazing travel
                  </h1>
                  <p className="pt-1 text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Ex iste suscipit reiciendis, perferendis vel
                    consequuntur cupiditate ad commodi provident,
                    sapiente veniam sed autem.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>


    </div>
  )
}
