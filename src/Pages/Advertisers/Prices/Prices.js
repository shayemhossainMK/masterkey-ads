import React from "react";

const Prices = () => {
  return (
    <div>
      <div className="px-2 md:px-40 pt-10">
        <div>
          <h1 className="text-secondary text-2xl font-bold text-center uppercase">
            Prices
          </h1>
        </div>

        <div className="py-10">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="md:text-xl text-gray-600">Country</th>
                  <th className="md:text-lg text-gray-600">Impressions</th>
                  <th className="md:text-lg text-gray-600">CPC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <td>Bangladesh</td>
                  <td>15002322</td>
                  <td>$0.001</td>
                </tr>

                <tr className="hover">
                  <td>Nepal</td>
                  <td>7799922</td>
                  <td>$0.001</td>
                </tr>

                <tr className="hover">
                  <td>Srilanka</td>
                  <td>9023023</td>
                  <td>$0.001</td>
                </tr>
                <tr className="hover">
                  <td>USA</td>
                  <td>88973895</td>
                  <td>$0.006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
