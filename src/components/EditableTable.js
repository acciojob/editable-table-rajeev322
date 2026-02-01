import React, { useRef, useState } from "react";

function EditableTable() {
  const editedRowsRef = useRef({});

  const [rows, setRows] = useState([
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Orange", price: 60 }
  ]);

  const handleChange = (id, field, value) => {
    // update UI (controlled input)
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    // track edited rows using useRef
    if (!editedRowsRef.current[id]) {
      editedRowsRef.current[id] = {};
    }
    editedRowsRef.current[id][field] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editedRowsRef.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleChange(row.id, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.price}
                  onChange={(e) =>
                    handleChange(row.id, "price", Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Save</button>
    </form>
  );
}

export default EditableTable;
