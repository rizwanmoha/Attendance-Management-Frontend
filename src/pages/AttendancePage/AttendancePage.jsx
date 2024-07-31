

import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Tables from "../../components/Tables/Table";
import { loadingActions } from "../../store/loadingSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CSVLink } from "react-csv";
import classes from "./AttendancePage.module.css";
import {backendUrl} from "../../backend";

export default function AttendancePage() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [csvData, setCSVData] = useState([]);

  const getData = async () => {
    try {
      dispatch(loadingActions.showLoading());
      const classDataTemp = await axios.get(`${backendUrl}/api/getClass/` + cid);
      let classData = classDataTemp.data.data;
      let roll_numbers = [];
      let itr = 0;
      while (classData.students[itr] !== undefined) {
        let obj = {
          students: classData.students[itr].roll_number,
        };
        let j = 0;
        while (classData.attendance[j] !== undefined) {
          const date = classData.attendance[j].date.split(" ")[0];
          obj[date] = classData.attendance[j].values[itr].status;
          j++;
        }
        roll_numbers.push(obj);
        itr++;
      }

      setTableData(roll_numbers);

      let column = [
        {
          Header: "Roll Number",
          accessor: "students",
        },
      ];

      let i = 0;
      const seenDates = new Set();
      while (classData.attendance[i] !== undefined) {
        const date = classData.attendance[i].date.split(" ")[0];
        if (!seenDates.has(date)) {
          let obj = {
            Header: date,
            accessor: date,
            id: `date_${i}`, // Add a unique id for each column
          };
          column.push(obj);
          seenDates.add(date);
        }
        i++;
      }
      setColumns(column);

      const cData = [[...column.map((c) => c.Header)]];
      const helper = [...column.map((c) => c.accessor)];
      roll_numbers.forEach((rl) => {
        let tArr = [];
        helper.forEach((d) => {
          tArr.push(rl[d]);
        });
        cData.push(tArr);
      });

      setCSVData(cData);

      dispatch(loadingActions.hideLoading());
    } catch (err) {
      dispatch(loadingActions.hideLoading());
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Dashboard>
        <CSVLink data={csvData} className={classes.link}>
          Download CSV
        </CSVLink>
        <Tables data={tableData} columns={columns} />
      </Dashboard>
    </>
  );
}