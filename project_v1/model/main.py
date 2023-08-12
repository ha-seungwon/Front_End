import torch
import torch.nn as nn
from fastapi import FastAPI
import ast
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:1234"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(LSTMModel, self).__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        out, _ = self.lstm(x)
        out = self.fc(out)
        
        return out

input_size = 12
hidden_size = 64
num_layers = 2
output_size = 1
model = LSTMModel(input_size, hidden_size, num_layers, output_size)
model.load_state_dict(torch.load('lstm_model.pth'))
model.eval()

def predict_single_input(input_data):
    model.eval()
    with torch.no_grad():
        input_tensor = torch.tensor(input_data, dtype=torch.float32).view(1, -1)
        output = model(input_tensor)
        prediction = torch.sigmoid(output).round().item()
    return prediction

@app.post("/predict/")
async def predict(input_data: str):
    input_data = ast.literal_eval(input_data)
    filtered_values = [value for value in input_data if value != -1]
    mean_value = np.mean(filtered_values)
    
    input_data = [mean_value if value == -1 else value for value in input_data]
    print(f"model input data is {input_data}")

    result = predict_single_input(input_data)
    return {"prediction": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
