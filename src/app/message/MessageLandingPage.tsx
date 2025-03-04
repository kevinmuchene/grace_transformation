"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { SelectChangeEvent } from "@mui/material/Select";

import Link from "next/link";
import { speakers, tableRowData } from "@/appData/TableData";
import FormControlMessagePage from "@/components/FormControlMessagePage";

interface Column {
  id: "date" | "title" | "speaker";
  label: string;
  align?: "right" | "center";
}

const columns: readonly Column[] = [
  { id: "date", label: "Date", align: "center" },
  { id: "title", label: "Title", align: "center" },
  { id: "speaker", label: "Speaker", align: "center" },
];

export default function MessageLandingPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedSpeaker, setSelectedSpeaker] = useState("All");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (data: string) => {
    console.log(data);
  };

  // Handler for speaker dropdown change
  const handleSpeakerChange = (event: SelectChangeEvent<string>) => {
    setSelectedSpeaker(event.target.value);
    setPage(0);
  };

  // Filter the table data based on the selected speaker
  const filteredRows =
    selectedSpeaker === "All"
      ? tableRowData
      : tableRowData.filter((row) => row.speaker === selectedSpeaker);

  return (
    <div className="p-3 md:p-7">
      <FormControlMessagePage
        selectedSpeaker={selectedSpeaker}
        handleSpeakerChange={handleSpeakerChange}
        speakers={speakers}
      />
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    <span className="font-bold md:text-lg">{column.label}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.date}
                      onClick={() => handleRowClick(row.date)}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link href={`message/${row.date}`}>
                              <span className="text-xs md:text-lg">
                                {value}
                              </span>
                            </Link>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[-1]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
