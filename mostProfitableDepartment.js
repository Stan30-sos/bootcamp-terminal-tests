 export default function mostProfitableDepartment(list){
    const departmentMap = {};
      for (var i=0;i<list.length;i++){
      var departmentSales = list[i]
      departmentMap[departmentSales.department] =0
      }
      for (var i=0;i<list.length;i++){
      var departmentSales = list[i]
        var currentDepartmentSales = departmentMap[departmentSales.department]
        currentDepartmentSales += departmentSales.sales;
        departmentMap[departmentSales.department] = currentDepartmentSales
      }
    var maxDepartmentSales = 0
    var department = "";
    for(let sales in departmentMap){
    var itemsSold = departmentMap[sales];
      if(currentDepartmentSales > maxDepartmentSales){
         maxDepartmentSales = itemsSold
      department = sales
      }
       }
      //console.log(departmentMap)
      return department
    }  
    var salesData = [
        {department : 'hardware', sales : 4500, day : 'Monday'},
        {department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'},
        {department : 'hardware', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'hardware', sales : 1500, day : 'Wednesday'},
        {department : 'outdoor', sales : 8507, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        {department : 'hardware', sales : 12000, day : 'Thursday'},
        {department : 'outdoor', sales : 18007, day : 'Thursday'},
        {department : 'carpentry', sales : 6109, day : 'Thursday'},
        {department : 'hardware', sales : 7005, day : 'Friday'},
        {department : 'outdoor', sales : 12006, day : 'Friday'},
        {department : 'carpentry', sales : 16109, day : 'Friday'},
    ];
    
    var salesData2 = [
        {department : 'electronics', sales : 4500, day : 'Monday'},
        {department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'},
        {department : 'steelwork', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'hardware', sales : 1500, day : 'Wednesday'},
        {department : 'outdoor', sales : 8507, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        {department : 'hardware', sales : 12000, day : 'Thursday'},
        {department : 'carpentry', sales : 6109, day : 'Thursday'},
        {department : 'hardware', sales : 7005, day : 'Friday'},
        {department : 'electronics', sales : 12006, day : 'Friday'},
        {department : 'electronics', sales : 16109, day : 'Saturday'},
        {department : 'steelwork', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'steelwork', sales : 1500, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    ];