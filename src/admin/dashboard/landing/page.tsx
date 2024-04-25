const LandingPage = () => {
  return (
    <div>
      <section className="p-8">
        <div>
          <h1 className="text-xl font-semibold">Youtube Video and Details</h1>
          <div className="w-full ml-10 flex justify-between items-center">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Video Link{" "}
              </label>
              <input
                type="text"
                name="name"
                // value={}
                // onChange={handleChange}
                className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Paragraph
              </label>
              <input
                type="text"
                name="certificate"
                // value={formData.certificate}
                // onChange={handleChange}
                className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Our Story</h1>
          <div className="w-full ml-10 ">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Add Key Points
              </label>
              <input
                type="text"
                name="name"
                // value={}
                // onChange={handleChange}
                className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Paragraph
              </label>
              <input
                type="text"
                name="certificate"
                // value={formData.certificate}
                // onChange={handleChange}
                className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Best In Indstury</h1>
          <div className="w-full ml-10 mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Add Key Points
            </label>
            <input
              type="text"
              name="name"
              // value={}
              // onChange={handleChange}
              className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
