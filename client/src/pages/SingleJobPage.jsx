import axios from "axios";
const REACT_APP_API = "http://localhost:5000";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const SingleJobPage = () => {
  const { id } = useParams();

  const fetchJob = async () => {
    console.log("Niladri");
    const { data } = await axios.get(`${REACT_APP_API}/jobs/getJob/${id}`);
    console.log(data?.job);
    return data?.job;
  };

  const { isLoading, error, data } = useQuery("jobs", fetchJob);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    workType,
    employmentType,
    description,
  } = data;

  if (data) {
    return (
      <div className="px-60 py-12">
        <span className="pl-20">
          <Link to="/" className="hover:underline">Jobs</Link> {" > "} <span className="text-blue-600 underline">{id}</span>
        </span>
        <div className="mt-10 text-center flex flex-col items-center gap-6">
          <img
            src={data?.companyLogo}
            alt="companylogo"
            className="w-96 h-40 object-contain rounded-md "
          />
          <div className="flex flex-col gap-1 text-gray-600">
            <p className="font-bold"> Job id : {id}</p>
            <p className="font-bold text-normal">
              {" "}
              Company Name : {companyName}
            </p>
            <p className="font-bold text-normal"> Job Role : {jobTitle}</p>
            <p className="font-bold text-normal">
              {" "}
              Job Location : {jobLocation?.toUpperCase()}
            </p>
            <div className="flex gap-4 items-center justify-center my-6">
              <button className="px-4 py-1 border-blue-600 border-2 text-blue-600 bg-transparent rounded-md">
                Save Job
              </button>
              <button className="px-4 py-1 bg-blue-600 border-blue-600 border-2 text-white rounded-md">
                Apply Now
              </button>
            </div>
            {/* <p className="font-bold text-normal">
                {" "}
                Work type : {workType.toUpperCase()}
              </p>
              <p className="font-bold text-normal">
                {" "}
                Employment Type : {employmentType.toUpperCase()}
              </p> */}
          </div>
        </div>
        <div className="py-24 pb-12 flex items-ceter  justify-between  px-12">
          <div className="flex flex-col gap-2 w-[800px] ">
            <p className="font-bold pb-3 text-lg">Benefits</p>
            <div className="flex flex-col text-base gap-2 font-semibold text-gray-400">
              <span>Pulled from the full job description</span>
              <span>1 $80-120k</span>
              <span>2. Disability insurance</span>
              <span>3. Employee discount</span>
              <span>4. Flexible spending account</span>
              <span>5.Health insurance </span>
              <span>6. Paid time off</span>
              <span>7. Vision insurance </span>
              <span>8. Volunteer time off </span>
              <span>9. Dental insurance</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[800px] pr-24">
            <p className="font-bold pb-3 text-lg">Outline</p>
            <div className="flex flex-col text-base gap-4 font-semibold text-gray-400">
              <span>
                Grand Canyon Education (GCE) is a rapidly growing educational
                service company that has long been an industry leader in
                providing educational operational and technological support
                services to the post- secondary education sector. We put people
                first drive innovation and do good in the community that we live
                and work in.
              </span>
              <span>
                This position entails joining a web design and development team
                called Academic Web Services within Grand Canyon Education to
                build custom web apps Academic Web Services is a close-knit team
                that constructs and maintains a wide variety of applications
                using the latest web technologies
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[800px] ">
            <p className="font-bold pb-3 text-lg">Future Growth</p>
            <div className="flex flex-col gap-4 text-base font-semibold text-gray-400">
              <span>
                An industry leader in providing educational operational and
                technological support services to the post- secondary education
                sector. We put people first, drive innovation and do good in the
                community that we live and work in
              </span>
              <span>
                We are passionate about web design and development and are
                focused on delivering quality products to our customers in a
                team setting driven by strong culture and a good working
                atmosphere. We are hiring web developers at all levels of
                experience. Requirements below reflect the minimum experience
                level
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptatum, sint et iusto itaque, obcaecati mollitia asperiores a
            nesciunt eius, expedita voluptatem eaque rem atque incidunt.
            Laudantium beatae eaque, id magni rerum, eum consectetur ipsum
            facilis modi accusantium, quisquam optio. Perferendis dolores
            consectetur quia quaerat dolor eos debitis ipsa nesciunt dolore
            neque quidem fugit sed natus voluptate commodi est ipsam aut, odit
            eligendi accusantium labore eaque temporibus optio aspernatur!
            Soluta animi dolore ipsam incidunt quod ullam quis accusantium
            praesentium omnis nemo sed, ratione nobis rem hic, blanditiis
            exercitationem. Cumque odio reprehenderit quod, dolores pariatur
          </p>
          <p className="text-gray-400 py-4">
            {" "}
            sequi vel, ipsa eum fugit voluptates nihil debitis laudantium.
            Voluptatum blanditiis exercitationem nam ex sunt? Totam sapiente
            voluptate numquam voluptates asperiores expedita exercitationem
            veritatis eligendi blanditiis sint quod laborum, nobis non
            consectetur aliquam eum reprehenderit nesciunt beatae quas iusto
            corporis ipsam error! Quidem corrupti voluptates sint, a suscipit
            totam veniam sapiente corporis sit tempore atque excepturi odio
            neque ab, similique commodi accusamus officia. Temporibus, esse
            totam! Sint beatae ad earum quis labore quasi unde tempore non
            similique? Eum quasi eius asperiores porro dolore, dolores similique
            illo? Recusandae nostrum iusto nam optio quia hic reprehenderit
            impedit. Laborum, totam quaerat!
          </p>
          <p className="text-gray-400 py-4">
            {" "}
            ex saepe sed obcaecati velit autem quia dolorum. Dolore veniam nemo
            perferendis corporis corrupti accusantium ipsam, recusandae optio
            aliquid assumenda eum sit id consectetur quo harum aspernatur odio.
            Commodi vitae, blanditiis placeat reprehenderit quidem itaque
            assumenda nulla dignissimos voluptas odit saepe consequuntur
            cupiditate dolore libero vero possimus veniam similique
            necessitatibus fugit eveniet? Dolor corrupti totam animi quia
            laboriosam similique neque consectetur, hic id doloremque omnis,
          </p>
        </div>
      </div>
    );
  }
};
export default SingleJobPage;
