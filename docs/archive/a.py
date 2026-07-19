import os
from datetime import datetime

# ===== CONFIG =====
ROOT_DIR = r"./"
OUTPUT_FILE = "source_report.txt"

SKIP_DIRS = {
    ".git", "node_modules", "__pycache__", ".vscode",
    ".idea", "dist", "build", ".next", ".cache"
}

MAX_FILE_SIZE_KB = 200

# Only React / frontend source
ALLOWED_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx",
    ".css", ".scss", ".sass",
    ".html"
}


def safe_read_file(path):
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()
    except Exception as e:
        return f"[ERROR READING FILE: {e}]"


def write_header(f, root, file_count):
    f.write("=" * 40 + "\n")
    f.write("PROJECT SOURCE REPORT\n")
    f.write(f"Root: {root}\n")
    f.write(f"Generated: {datetime.now()}\n")
    f.write(f"Total Files Captured: {file_count}\n")
    f.write("=" * 40 + "\n\n")


def generate_report(root_dir, output_file):
    collected_files = []

    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]

        for file in files:
            full_path = os.path.join(root, file)

            ext = os.path.splitext(file)[1].lower()
            if ext not in ALLOWED_EXTENSIONS:
                continue

            try:
                size_kb = os.path.getsize(full_path) / 1024
                if size_kb > MAX_FILE_SIZE_KB:
                    continue
            except:
                continue

            collected_files.append(full_path)

    with open(output_file, "w", encoding="utf-8") as report:
        write_header(report, root_dir, len(collected_files))

        report.write("FILE TREE\n")
        report.write("-" * 40 + "\n")
        for path in collected_files:
            report.write(path.replace(root_dir, ".") + "\n")
        report.write("\n" + "=" * 40 + "\n\n")

        for path in collected_files:
            report.write(f"--- FILE: {os.path.basename(path)} ---\n")
            report.write(f"PATH: {path}\n")
            report.write("-" * 40 + "\n")
            report.write(safe_read_file(path) + "\n")
            report.write("-" * 40 + "\n\n")

    print(f"Report generated: {output_file}")
    print(f"Captured {len(collected_files)} files")
    print(f"Skipped non-React files and files over {MAX_FILE_SIZE_KB}KB")


if __name__ == "__main__":
    if not os.path.exists(ROOT_DIR):
        print("ROOT_DIR does not exist. Fix your path.")
    else:
        generate_report(ROOT_DIR, OUTPUT_FILE)
