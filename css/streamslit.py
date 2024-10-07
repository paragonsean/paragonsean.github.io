import streamlit as st
import pandas as pd
import json
import yaml

# Define a function to generate a mock OpenAPI schema
def generate_openapi_schema(selected_fields):
    openapi = {
        "openapi": "3.0.0",
        "info": {
            "title": "Generated API",
            "version": "1.0.0"
        },
        "paths": {
            "/data": {
                "get": {
                    "summary": "Retrieve data",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Successful Response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for field in selected_fields:
        openapi["paths"]["/data"]["get"]["parameters"].append({
            "name": field,
            "in": "query",
            "required": False,
            "schema": {
                "type": "string"
            }
        })
        openapi["paths"]["/data"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["properties"][field] = {
            "type": "string"
        }

    return openapi

# Title
st.title("API Generator from Data Files")

# Step 1: Upload Data
st.header("Step 1: Upload Your Data")
uploaded_file = st.file_uploader("Upload CSV, JSON, TXT, or SQL", type=["csv", "json", "txt", "sql"])

if uploaded_file:
    file_type = uploaded_file.name.split('.')[-1]

    # Step 2: Display Data and Extract Headers (if CSV)
    if file_type == 'csv':
        df = pd.read_csv(uploaded_file)
        st.write("Data Preview:")
        st.write(df.head())

        headers = df.columns.tolist()
        st.write("Headers Detected:", headers)

        # Step 3: Let user select which fields to expose
        st.header("Step 2: Select Fields to Expose in API")
        selected_fields = st.multiselect("Select fields to expose", headers)

    elif file_type == 'json':
        data = json.load(uploaded_file)
        st.write("Uploaded JSON data:", data)
        headers = list(data[0].keys()) if isinstance(data, list) else list(data.keys())
        selected_fields = st.multiselect("Select fields to expose", headers)

    elif file_type == 'txt' or file_type == 'sql':
        content = uploaded_file.read().decode("utf-8")
        st.write("Uploaded Text/SQL content:")
        st.text(content)
        selected_fields = st.text_input("Enter fields to expose (comma-separated)").split(",")
    
    # Step 4: Stack of Queries
    st.header("Step 3: Stack Queries")
    stacked_queries = st.text_area("Write your SQL-like queries here (e.g., `SELECT * FROM table WHERE field=value`)")

    # Step 5: Generate OpenAPI Schema
    if st.button("Generate OpenAPI Schema"):
        if selected_fields:
            openapi_schema = generate_openapi_schema(selected_fields)
            st.write("Generated OpenAPI Schema:")
            st.json(openapi_schema)
            st.download_button(
                label="Download OpenAPI YAML",
                data=yaml.dump(openapi_schema),
                file_name="openapi_generated.yaml",
                mime="application/x-yaml"
            )
        else:
            st.warning("Please select fields to expose in the API.")
