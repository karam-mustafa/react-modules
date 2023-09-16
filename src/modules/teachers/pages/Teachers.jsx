import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { fetchTeachers } from "../store/slice/teachers.slice";

export default function Teachers() {
  // const { firts, data } = useLoaderData();
  const data = useSelector((state) => state?.teachers?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <div className="row">
      {data &&
        data?.map((item) => {
          return (
            <div className="col-lg-4">
              {item.firstName} {item.lastName}
            </div>
          );
        })}
    </div>
  );
}
