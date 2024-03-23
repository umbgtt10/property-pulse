# Property Page Cleanup

Before we move on, I want to clean up the single property page a bit. We have a lot of code in there that we can move to separate components.

Open the `app/properties/[id]/page.jsx` file.

Let's take the `<main>` tag and everything in it and move it to a new component called `PropertyDetails`. Create a new file at `components/PropertyDetails.jsx` and add the following code:

```jsx
import PropertyMap from '@/components/PropertyMap';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
} from 'react-icons/fa';

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{property.type}</div>
        <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
        <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarker className='text-orange-700 mr-2 text-lg' />
          <p className='text-orange-700'>
            {property.location.city}, {property.location.state}
          </p>
        </div>

        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Nightly</div>
            <div className='text-2xl font-bold'>
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
            <div className='text-2xl font-bold text-blue-500'>
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Monthly</div>
            <div className='text-2xl font-bold text-blue-500'>
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Description & Details</h3>
        <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
          <p>
            <FaBed className='inline-block mr-2' /> 3{' '}
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> 2{' '}
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline-block mr-2' />
            1,500 <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-gray-500 mb-4'>{property.description}</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Amenities</h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2'>
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className='inline-block mr-2 text-green-600' />
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <PropertyMap property={property} />
      </div>
    </main>
  );
};
export default PropertyDetails;
```

We can delete the import of `PropertyMap` and the icons from `app/properties/[id]/page.jsx` and replace the `<main>` tag with:

```jsx
<PropertyDetails property={property} />
```

## Bookmark Button

Let's put the bookmark button into its own component as well. Create a new file at `components/BookmarkButton.jsx` and cut the button from the page and add it to the new component:

```jsx
import { FaBookmark } from 'react-icons/fa';

const BookmarkButton = ({ property }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
      <FaBookmark className='mr-2' />
      Bookmark Property
    </button>
  );
};
export default BookmarkButton;
```

Import and embed the new component in the page:

```jsx
import BookmarkButton from '@/components/BookmarkButton';
```

We are going to pass the property to the bookmark button component so that we can use it to bookmark the property. We will do this later. For now, just add the property as a prop to the component:

```jsx
<BookmarkButton property={property} />
```

## Share Button

Do the same for the share button. Create a new file at `components/ShareButtons.jsx` and cut the button from the page and add it to the new component:

```jsx
import { FaShare } from 'react-icons/fa';

const ShareButtons = ({ property }) => {
  return (
    <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
      <FaShare className='mr-2' /> Share Property
    </button>
  );
};
export default ShareButtons;
```

Import and embed the new component in the page:

```jsx
import ShareButtons from '@/components/ShareButtons';
```

```jsx
<ShareButtons property={property} />
```

## Contact Form

Now do the same for the contact form. Create a new file at `components/PropertyContactForm.jsx` and cut the form from the page and add it to the new component:

```jsx
import { FaPaperPlane } from 'react-icons/fa';

const PropertyContactForm = ({ property }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-xl font-bold mb-6'>Contact Property Manager</h3>
      <form
        action='mailto:support@traversymedia.com'
        method='post'
        encType='text/plain'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='message'
          >
            Message:
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
            id='message'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
            type='submit'
          >
            <FaPaperPlane className='mr-2' /> Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default PropertyContactForm;
```

Import and embed the new component in the page. Your final `app/properties/[id]/page.jsx` file should look like this:

```jsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchProperty } from '@/app/properties/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyImages from '@/components/PropertyImages';
import Spinner from '@/components/Spinner';
import PropertyDetails from '@/components/PropertyDetails';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const property = await fetchProperty(id);
      setProperty(property);
      setLoading(false);
    };

    fetchPropertyData();
  }, [id]);

  return (
    <>
      {!loading && <PropertyHeaderImage image={property.images[0]} />}

      {!loading && (
        <section>
          <div className='container m-auto py-6 px-6'>
            <Link
              href='/properties'
              className='text-blue-500 hover:text-blue-600 flex items-center'
            >
              <FaArrowLeft className='mr-2' /> Back to Properties
            </Link>
          </div>
        </section>
      )}

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className='bg-blue-50'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <PropertyDetails property={property} />

              {/* <!-- Sidebar --> */}
              <aside className='space-y-4'>
                <BookmarkButton property={property} />
                <ShareButtons property={property} />
                <PropertyContactForm property={property} />
              </aside>
            </div>
          </div>
        </section>
      )}
      {!loading && <PropertyImages images={property.images} />}
    </>
  );
};

export default PropertyPage;
```

Now we can start to work on the bookmarking functionality.
