

const convertDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/');
        const date = new Date(`${year}-${month}-${day}T00:00:00`);
        return date.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
}
export default convertDate
