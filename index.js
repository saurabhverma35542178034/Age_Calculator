function ageCalculator() {
    const dobInput = document.getElementById('DOB').value;
    const resultYear = document.getElementById('year-result');
    const resultMonth = document.getElementById('month-result');
    const resultDay = document.getElementById('day-result');
    
    if (!dobInput) {
        document.getElementById('message').innerText = 'Please enter a date of birth.';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    resultYear.innerText = years;
    resultMonth.innerText = months;
    resultDay.innerText = days;
    
    document.getElementById('message').innerText = '';
}
