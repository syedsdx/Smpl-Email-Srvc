var nodemailer = require('nodemailer');

 

exports.handler = (event, context, callback) => {

        console.log(event)
    
    const getamount = event => {
        let amount = {
            Basic : "amount",
            HRA : "amount",
            LTA : "amount",
            Medical : "amount",
            SpecialAllowance : "amount",
            Incentives : "amount",
            EmployerContributionESIC : "amount",
            EmployerContributionPF : "amount",
            TotalAmount : "amount",
        }
    }
    
    console.log("started")
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sdxking9@gmail.com',
        pass: ''
      }
    });
    
    var mailOptions = {
      from: 'sdxking9@gmail.com',
      to: 'syed.hussaincoolboy@gmail.com',
      subject: 'sending email using nodejs',
    //  text: `hii thank you for guidance`,
     html: `<html>
     <head>
     <title>Remuneration Slip</title>
     </head>
     <body bgcolor ="white">
     <form>
         <h1>Kadel Labs</h1>
         <h3>REMUNERATION SLIP "MONTH/YEAR"</h3>
       Employee/Consultant Name
       <input type="text name="Name" value=${event.name}><br>
       Employee/Consultant ID
       <input type="text name="toID" value=${event.id}><br>
       Number of days in the Month 
       <input type="text name="Days" value=${event.days}><br>
        Number of days worked in a Month
       <input type="text name="Wdays" value=${event.wdays}><br>
       <table border=10 width=40%>
         <th>
         <tr align="center">
         <td><B>Earning</td><td><B>"amount"</td><td><B>Deduction</td><td><B>Amount</B></td></tr>
         <tr align="center">
         <td>Basic Salary</td><td>amount</td><td>PF</td><td>amount</td></tr>
         <tr align="center">
         <td>HRA</td><td>amount</td><td>ESI</td><td>amount</td></tr>
         <tr align="center">
         <td>LTA</td><td>amount</td><td>Loss of assets</td><td>amount</td></tr>
         <tr align="center">
         <td>Medical</td><td>amount</td><td>TDS</td><td>amount</td></tr>
         <tr align="center">
         <td>Special Allowance</td><td>amount</td><td>Miscellaneous</td><td>amount</td></tr>
         <tr align="center">
         <td>Incentives</td><td>amount</td><td>Professional Tax</td><td>amount</td></tr>
         <tr align="center">
         <td>Employer Contribution ESIC</td><td>amount</td><td>Cess/Surcharge</td><td>amount</td></tr>
         <tr align="center">
         <td>Employer Contribution PF</td><td>amount</td><td> </td><td> </td></tr>
         <tr align="center">
         <td> </td><td> </td><td> </td><td> </td></tr>
         <tr align="center">
         <td>TOTAL</td><td>amount</td><td>TOTAL</td><td>amount</td></tr>
         </table>
     Retention Bonus Accural in the current month:<b> "amount"
     
     </form>
     </html>`,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
       console.log("in main function");
      if (error) {
        console.log(error);
        return error
      } else {
        console.log('Email sent: ' + info.response);
        return {emailSent:info.response}
      }
    });
    
     callback(null, {
        statusCode: '200',
        body: "Success",
        headers: {
            'Content-Type': 'application/json',
        },
    });
}