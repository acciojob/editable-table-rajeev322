import React, { useRef } from "react";

function EditableTable() {
  const editedRowsRef = useRef({});

  const data = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 40 },
    { id: 3, name: "Orange", price: 60 }
  ];

  const handleChange = (id, field, value) => {
    if (!editedRowsRef.current[id]) {
      editedRowsRef.current[id] = {};
    }
    editedRowsRef.current[id][field] = value;
  };

  const handleSubmit = () => {
    console.log("Edited Rows:", editedRowsRef.current);
    alert("Check console for edited data");
  };

  return (
    <div>
      <h2>Editable Table</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  defaultValue={row.name}
                  onChange={(e) =>
                    handleChange(row.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  defaultValue={row.price}
                  onChange={(e) =>
                    handleChange(row.id, "price", Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default EditableTable;
