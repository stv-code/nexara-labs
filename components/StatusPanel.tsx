type Node = {
  code: string;
  label: string;
  status: string;
  state: "operational" | "certified";
};

const nodes: Node[] = [
  { code: "WEB", label: "Web & application development", status: "OPERATIONAL", state: "operational" },
  { code: "INF", label: "Hosting, domains & Workspace", status: "OPERATIONAL", state: "operational" },
  { code: "SEC", label: "Security consulting & assessments", status: "OPERATIONAL", state: "operational" },
  { code: "GOV", label: "Government procurement", status: "AGPO CERTIFIED", state: "certified" },
];

export default function StatusPanel() {
  return (
    <div className="border border-border bg-white">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <p className="label text-xs text-muted">System Status</p>
        <p className="label text-xs text-muted">Nairobi, KE</p>
      </div>
      <ul>
        {nodes.map((n, i) => (
          <li
            key={n.code}
            className={`flex items-center justify-between px-5 py-4 text-sm ${
              i !== nodes.length - 1 ? "border-b border-border/70" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  n.state === "certified" ? "bg-amber" : "bg-signal"
                }`}
              />
              <span className="font-mono text-xs text-muted">{n.code}</span>
              <span className="text-text">{n.label}</span>
            </div>
            <span
              className={`label text-xs ${
                n.state === "certified" ? "text-amber" : "text-signal"
              }`}
            >
              {n.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
