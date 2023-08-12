import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

# 가상의 데이터 생성
num_users = 100
num_months = 12
num_features = 3

data = np.random.rand(num_users, num_months, num_features).astype(np.float32)
labels = np.random.randint(2, size=(num_users, num_months)).astype(np.float32)

# 데이터 전처리
train_size = int(0.8 * num_users)
x_train, y_train = data[:train_size], labels[:train_size]
x_test, y_test = data[train_size:], labels[train_size:]

x_train = torch.tensor(x_train)
y_train = torch.tensor(y_train, dtype=torch.float32)  # 데이터 타입 변경
x_test = torch.tensor(x_test)
y_test = torch.tensor(y_test, dtype=torch.float32)  # 데이터 타입 변경

class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(LSTMModel, self).__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        out, _ = self.lstm(x)
        out = self.fc(out[:, -1, :])
        return out
input_size = num_features
hidden_size = 64
num_layers = 2
output_size = 1

model = LSTMModel(input_size, hidden_size, num_layers, output_size)

# 손실 함수와 옵티마이저 정의
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)


num_epochs = 10
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(x_train)
    
    # 시그모이드 함수를 적용하여 확률로 변환
    outputs_prob = torch.sigmoid(outputs)
    
    # BCEWithLogitsLoss에는 모델 출력과 대상(target)이 동일한 크기여야 합니다.
    # 따라서 대상의 크기도 (batch_size, num_months)로 변환합니다.
    y_train_viewed = y_train.view(-1, num_months)
    print(outputs_prob.size(),y_train_viewed.size())
    
    loss = criterion(outputs_prob, y_train_viewed)
    loss.backward()
    optimizer.step()
    print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# ...

# 모델 평가
model.eval()
with torch.no_grad():
    test_outputs = model(x_test)
    
    # 시그모이드 함수를 적용하여 확률로 변환
    test_outputs_prob = torch.sigmoid(test_outputs)
    
    # BCEWithLogitsLoss에는 모델 출력과 대상(target)이 동일한 크기여야 합니다.
    y_test_viewed = y_test.view(-1, num_months)
    
    test_loss = criterion(test_outputs_prob, y_test_viewed)
    print(f"Test Loss: {test_loss.item():.4f}")

# 예측
user_to_predict = data[0]
user_to_predict_tensor = torch.tensor(user_to_predict).unsqueeze(0)
prediction = model(user_to_predict_tensor)
pass_probability = torch.sigmoid(prediction)
print(f"Next Month's Pass Probability: {pass_probability.item():.4f}")
