import React from "react";

const MyPortfolio = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="text-3xl">
        Name:{" "}
        <span className="text-orange-400 font-bold">
          Md. Amirul Islam Hridoy Howlader.
        </span>
      </h2>
      <h3>Email: hossainhridoy30687@gmail.com</h3>
      <br />
      <div className="">
        <div class="overflow-x-auto max-w-4xl">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Exam</th>
                <th>Group</th>
                <th>College / School</th>
                <th>Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>B.B.A</th>
                <td>History (subject) </td>
                <td>
                  Govt.Titumir College <br /> (University of Dhaka)
                </td>
                <td>Running 2nd year</td>
              </tr>
              <tr class="active">
                <th>H.S.C</th>
                <td>Humanities</td>
                <td>Tongi Govt. College</td>
                <td>3.33</td>
              </tr>
              <tr>
                <th>S.S.C</th>
                <td>Business Studies</td>
                <td>
                  Haydarabad R.K.P <br /> High School
                </td>
                <td>4.45</td>
              </tr>
            </tbody>
          </table>

          <div class="overflow-x-auto mt-6">
            <table class="table table-compact w-70">
              <thead>
                <tr>
                  <th className='text-2xl'>List of technologies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>HTML</th>
                </tr>
                <tr>
                  <th>HTML5</th>
                </tr>
                <tr>
                  <th>CSS</th>
                </tr>
                <tr>
                  <th>CSS3</th>
                </tr>
                <tr>
                  <th>GitHub</th>
                </tr>
                <tr>
                  <th>Bootstrap</th>
                </tr>
                <tr>
                  <th>Tailwind css</th>
                </tr>
                <tr>
                  <th>JavaScript</th>
                </tr>
                <tr>
                  <th>JavaScript ES-6</th>
                </tr>
                <tr>
                  <th>API</th>
                </tr>
                <tr>
                  <th>React</th>
                </tr>
                <tr>
                  <th>React Router</th>
                </tr>
                <tr>
                  <th>Firebase</th>
                </tr>
                <tr>
                  <th>Node js</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className="text-2xl">My Live website Link</h2>
        <p>
          Bike Warehouse <a className='text-blue-700' href="https://velvety-entremet-267826.netlify.app/"
            target="_blanck">https://velvety-entremet-267826.netlify.app/</a>
        </p>
        <p>
          Saja <a className='text-blue-700' href="https://jocular-crepe-b537ed.netlify.app/"
            target="_blanck">https://jocular-crepe-b537ed.netlify.app/</a>
        </p>
        <p>
          Falcon Hall <a className='text-blue-700' href="https://competent-albattani-6a12df.netlify.app/"
            target="_blanck">https://competent-albattani-6a12df.netlify.app/</a>
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
