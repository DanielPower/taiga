const inspect = (
  input: any,
  config?: {
    depth?: number;
    filter?: (key: any) => boolean;
  },
  indent: number = 0,
) => {
  const depth = (config && config.depth) || 3;
  const filter = (config && config.filter) || (() => true);
  if (typeof input === "object") {
    if (depth !== 0) {
      io.write("{\n");
      Object.entries(input).forEach(([key, value]) => {
        if (!filter(key)) {
          return;
        }
        let printKey = "";
        if (typeof key === "string") {
          printKey = `"${key}"`;
        } else if (typeof key === "object") {
          printKey = `<object>`;
        } else if (typeof key === "function") {
          printKey = "<function>";
        } else {
          printKey = key;
        }

        io.write(" ".repeat(indent + 2), printKey, ": ");
        inspect(value, { depth: depth - 1, filter }, indent + 2);
      });
      io.write(" ".repeat(indent), "}\n");
    } else {
      io.write("{...}\n");
    }
  } else if (["string", "number"].includes(typeof input)) {
    io.write(input, "\n");
  } else if (typeof input === "function") {
    io.write("function\n");
  } else {
    io.write("<unknown value>\n");
  }
};

export default inspect;
