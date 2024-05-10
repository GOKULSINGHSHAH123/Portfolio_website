import PyPDF2

def extract_text_from_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            if reader.numPages > 0:
                first_page = reader.pages[0]
                text = first_page.extract_text()
                print(text)
            else:
                print("The PDF is empty.")
    except Exception as e:
        print("An error occurred:", e)

# Example usage:
extract_text_from_pdf(r"C:\Users\gokul\Downloads\sample.pdf")
extract_text_from_pdf(r"C:\Users\gokul\Downloads\Resume.pdf")
