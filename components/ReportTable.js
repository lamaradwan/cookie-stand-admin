
export default function ReportTable(props) {
    return (
        <>
        {
        props.cookiesData.length < 1? <h2>No Cookie Stands Available</h2>:
        <table>
            <thead>
                <tr>
                    <th className="border border-gray-600"> Location </th>
                    <th className="border border-gray-600"> 6am</th>
                    <th className="border border-gray-600"> 7am</th>
                    <th className="border border-gray-600"> 8am</th>
                    <th className="border border-gray-600"> 9am</th>
                    <th className="border border-gray-600"> 10am</th>
                    <th className="border border-gray-600"> 11am</th>
                    <th className="border border-gray-600"> 12pm</th>
                    <th className="border border-gray-600"> 1pm</th>
                    <th className="border border-gray-600"> 2pm</th>
                    <th className="border border-gray-600"> 3pm</th>
                    <th className="border border-gray-600"> 4pm</th>
                    <th className="border border-gray-600"> 5pm</th>
                    <th className="border border-gray-600"> 6pm</th>
                    <th className="border border-gray-600"> 7pm</th>
                    <th className="border border-gray-600"> Total </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cookiesData.map(item => {
                        return (
                            <>
                                <tr>
                                    <td className="border border-gray-600">{item.location}
                                    </td>
                                    <td className="border border-gray-600">{item.hourly_sales[0]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[1]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[2]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[3]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[4]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[5]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[6]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[7]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[8]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[9]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[10]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[11]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[12]}</td>
                                    <td className="border border-gray-600">{item.hourly_sales[13]}</td>
                                    <td className="border border-gray-600">{item.total}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
            
        </table>
    }
    </>
    )
}