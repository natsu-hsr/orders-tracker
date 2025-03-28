import {render, screen} from "@testing-library/react";
import {CustomTableContainer} from "./custom-table-container";
import type {CustomTableContainerProps} from "./custom-table-container";
import {TFilters} from "@/components/filters-form";

// Мокаем FiltersForm и CustomTable
jest.mock("@/components/filters-form", () => ({
  FiltersForm: ({filters}: { filters: TFilters }) => (
    <div data-testid="filters-form">{filters.length} filters</div>
  ),
}));

type MockDataSource = {
  id: string;
  name: string;
  age: number;
}

jest.mock("./custom-table", () => ({
  CustomTable: ({dataSource, rowKey, ...props }: CustomTableContainerProps<MockDataSource>) => (
    <table data-testid="custom-table" {...props}>
      <tbody>
        {dataSource?.map(row => (
          <tr
            data-key={rowKey ? row?.[rowKey] : row.id}
            key={rowKey ? row?.[rowKey] : row.id}
          >
            <td>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}));

describe("CustomTableContainer", () => {
  const defaultColumns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
  ];
  const defaultDataSource: MockDataSource[] = [
    { id: "1", name: "John", age: 30 },
    { id: "2", name: "Jane", age: 25 },
  ];
  const defaultFilters = [
    { key: "name", label: "Name", type: "TEXT" },
    { key: "age", label: "Age", type: "NUMBER" },
  ] as const;

  it("renders CustomTable without filters", () => {
    render(<CustomTableContainer
      columns={defaultColumns}
      dataSource={defaultDataSource}
    />);
    const table = screen.getByTestId("custom-table");
    expect(table).toBeInTheDocument();
    expect(screen.queryByTestId("filters-form")).not.toBeInTheDocument();
  });

  it("renders FiltersForm when filters are provided", () => {
    render(
      <CustomTableContainer
        columns={defaultColumns}
        dataSource={defaultDataSource}
        filters={defaultFilters}
      />
    );
    const table = screen.getByTestId("custom-table");
    const filtersForm = screen.getByTestId("filters-form");
    expect(table).toBeInTheDocument();
    expect(filtersForm).toBeInTheDocument();
    expect(filtersForm).toHaveTextContent("2 filters"); // Проверяем количество фильтров
  });

  it("applies styles to filters row when filters exist", () => {
    render(
      <CustomTableContainer
        columns={defaultColumns}
        dataSource={defaultDataSource}
        filters={defaultFilters}
      />
    );
    const row = screen.getByTestId("filters-form").parentElement;
    expect(row).toHaveClass("actions");
    expect(row).toHaveStyle("justify-content: flex-end");
  });

  it("passes table props to CustomTable", () => {
    render(
      <CustomTableContainer
        columns={defaultColumns}
        dataSource={defaultDataSource}
        rowKey="name"
      />
    );
    const table = screen.getByTestId("custom-table");
    expect(table).toBeInTheDocument();
    const rows = screen.getAllByRole("row");
    expect(rows[0]).toHaveAttribute("data-key", "John"); // Проверяем, что rowKey="name" применился
    expect(rows[1]).toHaveAttribute("data-key", "Jane");
  });
});