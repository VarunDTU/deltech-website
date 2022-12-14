import React,{useState} from "react";
import { useRouteLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const DgRegistration = () => {
  const { currentUser} = useAuth();
  const [userData, setUserData] = useState({
    Name: currentUser.email,
    email: "",
    instituteName: "",
    phone: "",
    munAttended: "",
    munExperience: "",
    yes: "",
    no: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const {
      Name,
      email,
      instituteName,
      phone,
      munAttended,
      munExperience,
      yes,
      no,
    } = userData;
    if (
      Name &&
      email &&
      instituteName &&
      phone &&
      munAttended &&
      munExperience
    ) {
      const res = await fetch(
        "https://deltechmun-cabba-default-rtdb.firebaseio.com/dgRegistration.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            email,
            instituteName,
            phone,
            munAttended,
            munExperience,
            yes,
            no,
          }),
        }
      );

      if (res) {
        setUserData({
          // Name: "",
          // email: "",
          // instituteName: "",
          // phone: "",
          // munAttended: "",
          // munExperience: "",
          // discribeCommittee: "",
          // describeIssue: "",
          // Photographer: "",
          // Journalist: "",
          // yes: "",
          // no: "",
          // terms: "",
        });
        alert("You are Registered");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };
  return (
    <>
      <section className=" bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-full py-0">
          <img
            className="h-36 md:h-56 m-6"
            src="/images/cover.png"
            alt="logo"
          />
          <div className="w-full  rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-3 md:space-y-5 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Delegate Application
              </h1>
              <div className="text-sm">
                Behold for the 12th Edition of{" "}
                <b> ???????????????????????????? ???????????????????? ???????????????????????? ???????????????????????????? ???????????????????????????????????????? ????????????????.</b>
              </div>
              <div className="text-sm">
                This year it will be bigger, better, more competitive, and more
                challenging. For, DelTech Model United Nations 2023, we are
                hosting five committees simulating various governmental councils
                surpassing the threshold established by the previous eleven
                editions of DelTech MUN.
              </div>
              <div className="text-sm">
                This year it will be bigger, better, more competitive, and more
                challenging. For, DelTech Model United Nations 2023, we are
                hosting five committees simulating various governmental councils
                surpassing the threshold established by the previous eleven
                editions of DelTech MUN.
              </div>
              <div className="text-sm">
                <b>Registration Fees:</b> <br />
                Individual Delegate: ??? 1400
                <br />
                Double Delegation: ??? 2800
                <br />
                International Press: ??? 1400
              </div>
              <div className="text-sm">
                <p>???????????????????????????????????????? & ????????????????????????????:</p> <br />
                <ol type="1" className="text-sm space-y-3">
                  <li>
                    <p>???????????????????????? ???????????????????????????? ???????????????????????????? ???????????????????????????????? (????????????????????)</p>
                    <p>
                      ???????????????????????????????????? ??????????? ???????????????????????????????????????????? ???????? ???????????????????????????????????????? ???????? ????????????????????????????????????????????????????
                      ???????????????????? ???????? ??????????? ???????????????????????????????? ???????????? ???????????????????????????????????????????????????????? ???????? ???????????????????????????????????????? ????????
                      ???????????????????????????????????????????? ???????????? ???????????????? ????????????????????????????.
                    </p>
                  </li>
                  <li>
                    <p> ???????????????????????? ???????????????????????????? ???????????????????? ???????????????????????? ???????????????????????????? (????????????????????)</p>
                    <p>
                      ???????????????????????????????????????? ??????????? ??????????????????????????????????????????????? ???????????????????????????????????????? ???????? ????????????????????, ??????????????? ????
                      ???????????????????????????? ??????????????????????????????? ???????? ???????????????????????????????????????? ????????????????????????????.
                    </p>
                  </li>
                  <li>
                    <p>
                      ???????????????????????? ???????????????????????????? ???????????????????????????????????????? ???????? ???????????? ???????????????????????? ???????? ???????????????????? (????????????????????)
                    </p>
                    <p>
                      ???????????????????? ???????? ???????????????????????????????????????????????????????????????????? ???????????? ???????????????????????????????????????????????? ???????? ???????????? ????????????????,
                      ???????????????????????????????????? ??????????? ???????????????????????????????????????? ??????????????????????????????? ???????? ???????????????????????? ????????????????????????????????.
                    </p>
                  </li>
                  <li>
                    <p>???????????????????????? ???????????????????????????? ???????????????????????????????? ???????????????????????????? (????????????????)</p>
                    <p>???????????????????????????????????????????????? ???????? ??????????? ???????????????????????? ????????????????????????.</p>
                  </li>
                  <li>
                    <p>???????????????????? & ???????????????????????????????? ???????????? ???????????????????????????? (???????????? ????????????????????????????)</p>
                    <p>
                      ???????????????????????????????????????????????? ???????? ??????????? ???????????? ????????????, ??????????????? ???????????????????????????? ??????????????????????????????? ????????
                      ???????????????????????????????????????????????????????? ????????????????????????.
                    </p>
                  </li>
                  <li>
                    <p> ???????????????????????????????????????????????????? ???????????????????? (????????)</p>
                    <p>???????????????????????????????????????? & ??????????????????????????????????????????????????</p>
                  </li>
                </ol>
              </div>
              <div className="text-sm">
                <p>???????????????????? ???????? ????????????????????????????????????????????????????:</p> <br />
                <ol className="text-sm space-y-3">
                  <li>1. Exciting Prizes worth INR 2 ????????????????????.</li>
                  <li>2. Certificates for Participation.</li>
                  <li>
                    3. Chance to delegate with the premier MUN in Delhi Circuit.
                  </li>
                  <li>4. Expand your debating and delegating circle.</li>
                  <li>
                    5. Hands-on experience with finely curated committees and
                    agendas.
                  </li>
                  <li>
                    6. Official Certificates and Trophies from DelTech MUN.
                  </li>
                  <li>7. Refreshments and full meals during the conference.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-900 text-sm">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full">
          <div className="w-full  rounded-lg shadow border sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    disabled={true}
                    placeholder={userData.email}
                    required
                  />
                </div>
               
                <div>
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Name
                  </label>
                  <input
                    type="Name"
                    name="Name"
                    id="Name"
                    value={useRouteLoaderData.Name}
                    onChange={postUserData}
                    placeholder="full name"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="instituteName"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Institute Name
                  </label>
                  <input
                    type="instituteName"
                    name="instituteName"
                    id="instituteName"
                    value={useRouteLoaderData.instituteName}
                    onChange={postUserData}
                    placeholder="School/College"
                    className="bordersm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={useRouteLoaderData.phone}
                    onChange={postUserData}
                    placeholder="whatsapp number"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="munAttended"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    How many MUN's have you attended?
                  </label>
                  <textarea
                    type="munAttended"
                    name="munAttended"
                    id="munAttended"
                    value={useRouteLoaderData.munAttended}
                    onChange={postUserData}
                    placeholder="Your Answer"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="munExperience"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    List your MUN Experience.
                  </label>
                  <textarea
                    type="munExperience"
                    name="munExperience"
                    id="munExperience"
                    value={useRouteLoaderData.munExperience}
                    onChange={postUserData}
                    placeholder="Your Answer"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <fieldset />
                  <legend
                    htmlFor="preference1"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Are you applying for UNHRC?
                  </legend>
                  <label
                    className="block mb-2 text-sm font-medium text-white"
                    htmlFor="yes"
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      name="grid"
                      id="yes"
                      value="yes"
                    />
                    Yes
                  </label>

                  <label
                    className="block mb-2 text-sm font-medium text-white"
                    htmlFor="no"
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      name="grid"
                      id="no"
                      value="no"
                    />
                    No
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={submitData}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Register
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DgRegistration;
