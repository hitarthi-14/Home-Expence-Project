using Home_Expense.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Home_Expense.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonthsDataController : ControllerBase
    {
        public AppDbContext context;

        public MonthsDataController(AppDbContext _context)
        {
            context = _context;
        }

        [HttpGet("GetData")]

        public IActionResult GetData()

        {
            var s = context.MonthsData;
            return Ok(s);
        }

        [HttpGet("GetDataByYear")]

        public IActionResult GetItemList()
        {
            var s = (from x in context.MonthsData
                     group x by new
                     {
                         year = x.MonthNumber,
                         num = x.MonthYear
                     } into monthsGroup
                     orderby monthsGroup.Key.year.Length ascending,
                             monthsGroup.Key.year.Length ascending,
                             monthsGroup.Key.num.Length ascending,
                             monthsGroup.Key.num ascending
                     select monthsGroup.Key).ToList();
            return Ok(s);
        }

        [HttpGet("GetTableData")]

        public IActionResult GetTableData(string month, string monthNumber, string TableName)
        {
            var tableData = (from x in context.MonthsData
                             where x.MonthNumber == monthNumber && x.MonthYear == month && x.TableName == TableName
                             select new
                             {
                                 date = x.Date,
                                 Name = x.Name,
                                 amount = x.Amount
                             }).ToList();
            return Ok(tableData);
        }

        [HttpPost("InsertData")]

        public IActionResult InsertData(MonthsData m)
        {
            var s =  context.MonthsData.Add(m);
            context.SaveChanges();
            return Ok("success");
        }

        [HttpDelete("Delete")]

        public IActionResult Delete(int id)
        {
            var x = context.MonthsData.Where(s => s.ID == id).FirstOrDefault();
            context.MonthsData.Remove(x);
            context.SaveChanges();
            return Ok(x);
       }

        

    }
    }

