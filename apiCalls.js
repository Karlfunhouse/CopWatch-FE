export const fetchIncidents = async () => {
    const url = `https://copwatch-be.herokuapp.com/api/v1/reports`
    try {
        const response = await fetch(url);
            if(!response.ok) {
                console.log(response)
                throw new error(error);
            }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const postIncident = async (report) => {
    // const url = 'https://copwatch-be.herokuapp.com/api/v1/reports/new'
    const url = 'https://www.school.com'
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                description: report.description,
                zip_code: report.location,
                city: report.location,
                state: report.location,
                parties: report.parties,
                officer_name: report.officerName,
                badge_number: report.badgeNum,
                created_date: report.date
            }
        )
      })
        .then(response => response.json())
        .catch(err => console.error(err))
}
