import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Orange", price: 60 },
    { id: 4, name: "Mango", price: 120 },
    { id: 5, name: "Grapes", price: 80 },
    { id: 6, name: "Pineapple", price: 150 }
  ]);

  // 👉 Track edited row IDs
  const editedRowsRef = useRef(new Set());

  const handleChange = (id, field, value) => {
    setRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    editedRowsRef.current.add(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited rows:", Array.from(editedRowsRef.current));
  };

  return (
    <form onSubmit={handleSubmit}>
      <table border="1">
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={e =>
                    handleChange(row.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.price}
                  onChange={e =>
                    handleChange(row.id, "price", Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditableTable;
