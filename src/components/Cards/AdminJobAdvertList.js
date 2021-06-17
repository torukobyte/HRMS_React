import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// components
import JobAdvertDropdown from "components/Dropdowns/jobAdvertDropdown.js";
import JobAdvertService from "../../services/JobAdvertService";
import EmployerService from "../../services/EmployerService";
import SystemPersonelService from "../../services/SystemPersonelService";

export default function AdminJobAdvertList({color}) {
    const [jobAdverts, setJobAdverts] = useState([]);

    let jobAdvertService = new JobAdvertService();

    let employerService = new EmployerService();

    let systemPersonelService = new SystemPersonelService();

    useEffect(() => {
        jobAdvertService.getSortedJobAdverts().then(result => setJobAdverts(result.data.data))
    })

    let airdate;


    function deleteJobAdvert(id) {
        jobAdvertService.deleteJobAdvertById(id);
    }

    return (

        <>
            <h3 className="text-4xl mb-4 font-semibold leading-normal text-blueGray-800 text-center"><i
                className="fas fa-briefcase"></i> İş İlanları</h3>
            <div
                className={"relative flex flex-col min-w-0 break-words shadow-lg text-white rounded-lg bg-blueGray-800"}
            >
                <div className="block overflow-x-auto rounded-lg">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse rounded-lg">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >

                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Şirket
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Pozisyon
                            </th>
                            {/*<th*/}
                            {/*    className={*/}
                            {/*        "align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                            {/*        (color === "light")*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    Açık Pozisyon*/}
                            {/*</th>*/}
                            {/*<th*/}
                            {/*    className={*/}
                            {/*        "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +*/}
                            {/*        (color === "light")*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    Açıklama*/}
                            {/*</th>*/}
                            <th
                                className={
                                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Maaş (₺)
                            </th>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Şehir
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Yayın Tarihi
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Son Başvuru Tarihi
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Aktif
                            </th>
                            <th
                                className={
                                    "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            >
                                Onaylı
                            </th>
                            <th
                                className={
                                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light")
                                }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobAdverts.map((jobAdvert, index) => (
                            <tr className={index % 2 == 0 ? "bg-lightBlue-600" : "bg-blueGray-800"}>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{index + 1}</td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.employer.companyName}
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.jobPosition.jobTitle}
                                </td>
                                {/*<td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                {/*    {jobAdvert.positionCount}*/}
                                {/*</td>*/}
                                {/*<td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">*/}
                                {/*    <div className="flex items-center">*/}
                                {/*        <div className="relative w-full">*/}
                                {/*            {jobAdvert.description}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</td>*/}
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.salary}(₺)
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        {jobAdvert.city.cityName}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <div className="flex">
                                        <span style={{display: "none"}}>{airdate = jobAdvert.airdate.toString().split(
                                            "T")}</span>
                                        {airdate[0]}
                                    </div>
                                </td>
                                <td className="border-b border-indigo-400 lg:px-10 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {jobAdvert.deadline}
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <input
                                        id="isActive"
                                        type="checkbox"
                                        checked={jobAdvert.active ? true : false}
                                        className="form-checkbox rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        style={{border: "2px solid #fff", color: "#9150ff"}}
                                        onClick={() => jobAdvert.active ? employerService.deactiveJobAdvert(
                                            false,
                                            jobAdvert.id) : employerService.deactiveJobAdvert(
                                            true,
                                            jobAdvert.id)}
                                    />
                                </td>
                                <td className="border-b border-indigo-400 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <input
                                        id="isConfirmed"
                                        type="checkbox"
                                        checked={jobAdvert.confirmed ? true : false}
                                        className="form-checkbox border-0 rounded text-red-500 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        style={{border: "2px solid #fff", color: "#9150ff"}}
                                        onClick={() => jobAdvert.confirmed ? systemPersonelService.approveJobAdvert(
                                            false,
                                            jobAdvert.id) : systemPersonelService.approveJobAdvert(true, jobAdvert.id)}
                                    />
                                </td>
                                <td className="border-b border-indigo-400 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <JobAdvertDropdown deleteJobAdvert={() => deleteJobAdvert(jobAdvert.id)}/>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );


}

AdminJobAdvertList.defaultProps = {
    color: "light",
};

AdminJobAdvertList.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};

